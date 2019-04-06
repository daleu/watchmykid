from bs4 import BeautifulSoup
from flask import jsonify, request
from src.services import nexmo, computerVision

from src.util import log


# def get():
#     try:
#         # nexmo_message = 'Hey there'
#         # nexmo.send_sms('WatchMyKid', '+34666349989', nexmo_message)
#
#         computerVision.analyze('https://cdn-images-1.medium.com/max/800/1*FY02C6JfeUMNvh8AnTr0uA.jpeg')
#
#         response = 'You made it'
#         return jsonify(error=False, response=response), 200
#     except Exception as e:
#         log.error('Unexpected error in GET/user: {}'.format(e))
#         return jsonify(error=True, message='Unexpected error.'), 400


def post():
    try:
        body = request.json
        required_parameters = ['page_html', 'tlf', 'url']
        if not all(x in body for x in required_parameters):
            return jsonify(error=True, message='All request body parameters are required.'), 400

        soup = BeautifulSoup(body['page_html'], 'html.parser')
        images = list(set([img.get('src') for img in soup.find_all('img') if img.get('src')]))

        for img in images:
            data = computerVision.analyze(img)
            if data and (data['isAdultContent'] or data['isRacyContent']):
                print('Hi ha contingut inapropiat')
                message = 'Watch out, your kid has entered a webpage with inapropiate content. Link to the web {}'\
                    .format(body['url'])
                nexmo.send_sms('WatchMyKid', body['tlf'], message)
                break
        response = 'Ok'
        return jsonify(error=False, response=response), 200
    except Exception as e:
        log.error('Unexpected error in POST/help: {}'.format(e))
        return jsonify(error=True, message='Unexpected error.'), 400
