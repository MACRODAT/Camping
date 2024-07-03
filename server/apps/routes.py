from flask import render_template, url_for, flash, redirect, request, make_response
from apps import app, db, bcrypt
from apps.models import User
from sqlalchemy.exc import IntegrityError
import apps.data
from flask_login import login_user, current_user, logout_user, login_required

@app.route("/register", methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, email=email, password=hashed_password)
        try:
            db.session.add(user)
            db.session.commit()
        except IntegrityError:
            return make_response({"message": "email or user id exist !"}, 505)
        except Exception as e:
            print(e.__class__)
            return make_response({"message": "error"}, 500)
        flash('Your account has been created!', 'success')
        return make_response({}, 200)
    return make_response({}, 200)

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user, remember=request.form.get('remember'))
            return make_response({}, 200)
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return make_response({}, 200)

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route("/account")
@login_required
def account():
    return render_template('account.html', title='Account')

