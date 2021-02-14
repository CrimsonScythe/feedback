from server_imports import *

app = Flask(__name__)

# db.engine.table_names()
# db.drop_all()
# db.create_all()

'''
load config 
'''
app.config.from_object('configmodule.DevelopmentConfig')


'''
Create Database instance
'''
db = SQLAlchemy(app)


'''
create mail instance
'''

mail = Mail(app)

'''
User data model
'''
class Yser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.Integer)
    email = db.Column(db.String(120))
    url = db.Column(db.String(120))

'''
Register User
'''
@app.route('/api/register', methods=['GET', 'POST'])
def signup_user():
    # data = request.get_json()
    data = request.args

    # hashed_email = generate_password_hash(data['email'], method='sha256')
    email = data['email']
    public_id = str(uuid.uuid4())
    url = f'feedback/{public_id}'
    # url=f'https://feedback-react-flask.herokuapp.com/feedback/{public_id}'
    user = Yser(public_id=public_id, email=email ,url=url)
    db.session.add(user)

    db.session.commit()
 
    response = jsonify({"response:": "ok", 'feedbackurl': url})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

'''
Login User
'''
@app.route('/api/login', methods=['GET', 'POST'])
def login_user():
    # data = request.get_json()
    data = request.args

    email = data['email']
    
    Users = Yser.query.all()

    for user in Users:
        hash=user.email
        # if check_password_hash(hash, email):
        if email==user.email:
            response = jsonify({"response:": "ok", 'feedbackurl': user.url})
            response.headers.add('Access-Control-Allow-Origin', '*')

            return response 

    
    response = jsonify({"response:": "ok", 'feedbackurl': None})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


'''
Send selected option to user
'''
@app.route('/api/send', methods=['GET', 'POST'])
def send():

    data = request.args
    
    obj1=Yser.query.filter_by(public_id=data['id']).first()
    email=obj1.email

    print(email)

    data = request.args

    option = data['option']

    msg = Message('Feedback from recruitor', sender = 'crimsonscythestudios@gmail.com', recipients = [email])
    msg.body = f"The following feedback was given: {option}"
    mail.send(msg)

    response = jsonify({"response:": "ok"})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
