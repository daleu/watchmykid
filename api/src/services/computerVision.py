import http.client, urllib.request, urllib.parse, urllib.error, base64
import requests
from src.util.env import get_env
from src.util import log

headers = {
    # Request headers
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': get_env('CV_API'),
}

params = urllib.parse.urlencode({
    # Request parameters
    'visualFeatures': 'Adult'
})

cognitiveUrl = 'https://northeurope.api.cognitive.microsoft.com/vision/v2.0/analyze'


def analyze(url):
    try:
        data = {'url': url}
        response = requests.post(cognitiveUrl, params=params, json=data, headers=headers)
        log.info('Url sent to analyze {}'.format(url))

        result = None

        if response.status_code == 200 or response.status_code == 201:
            data = response.json()
            result = {'isAdultContent': data['adult']['isAdultContent'], 'isRacyContent': data['adult']['isRacyContent']}
        else:
            log.error('Error on call to Microsoft cognitive services with code: {}'.format(response.status_code))
            log.error('Error on call to Microsoft cognitive services with message: {}'.format(response.json()['error']['message']))

        print(result)
        print('Is adult Content: {}'.format(result['isAdultContent']))
        print('Is Racy Content: {}'.format(result['isRacyContent']))
        return result

    except Exception as e:
        log.error('Unexpected error in call to microsoft cognitive services {}'.format(e))
