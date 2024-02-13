from flask import Flask
from flask_sockets import Sockets

app = Flask(__name__)
sockets = Sockets(app)

@sockets.route('/video_stream')
def video_stream(ws):
    while not ws.closed:
        message = ws.receive()
        if message:
            # Process the received video stream frame
            # Example: You can convert the base64 image data back to image and process it using OpenCV
            # You would typically process the frame here and send the result back to the client if needed
            print("Received frame:", message)

if __name__ == '__main__':
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler
    server = pywsgi.WSGIServer(('0.0.0.0', 5000), app, handler_class=WebSocketHandler)
    print("Server started...")
    server.serve_forever()
