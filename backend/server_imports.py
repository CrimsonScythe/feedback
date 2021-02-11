from flask import Flask, json, send_file
from flask import request
from flask.helpers import make_response
from flask import Flask, session
from flask import jsonify
# from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
# from flask_cors import CORS, cross_origin
import uuid
from configparser import ConfigParser
from flask_mail import Mail, Message