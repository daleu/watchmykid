import unittest
import requests


class HelpTest(unittest.TestCase):

    def setUp(self):
        self.endpoint = 'http://0.0.0.0:8081/manage'
        self.tlf = '+34666349989'
        self.medium = 'https://medium.com/@hackupc/meet-the-team-directors-6eca8b7c9fbb'
        self.headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.106 Safari/537.36'}

    def test_endpoint(self):
        request = requests.get(self.medium, headers=self.headers)
        self.assertEqual(request.status_code, 200)

        data = {'page_html': request.text, 'tlf': self.tlf}
        response = requests.post(self.endpoint, json=data)
        self.assertEqual(response.status_code, 200)

        # response_json = response.json()
        # self.assertTrue('error' in response_json)
        # self.assertTrue('response' in response_json)
        # self.assertTrue('skills' in response_json['response'])
        # self.assertTrue('user' in response_json['response'])
        # self.assertFalse(response_json['error'])
        # self.assertTrue(len(response_json['response']['skills']) > 0)


if __name__ == '__main__':
    unittest.main()
