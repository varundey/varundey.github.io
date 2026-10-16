---
layout: post
title: How to deploy a Flask app on Heroku
tags: ['python', 'Flask', 'Heroku']
author: "Varun Dey"
publish: true
date: '2016-10-02'
---
So you have created an awesome Flask app on your local system and now you want to show off this project to the world. You came across Heroku, which lets you host 5 free projects and you decided to go with it. Well not too soon. Deploying a Python-Flask app on Heroku takes some effort and in this blog, we are going to talk exactly about that.

So let's start.

### Virtual Environment
Virtual environement are an essential feature while deploying your app on a Platform as a Service (PaaS) or Heroku in this case. It keeps tracks of all the packages which are being used and installs them before deploying it to the cloud. Python has an excellent virtual environment calles which helps you in achieving exactly that.

```sh
# install python virtualenv
$ pip install virtualenv
# create a virtual environment directory venv
$ virtualenv venv
# fire up venv
$ source venv/bin/activate
```
Now you are running python in your virtual environment. Any package you install now are installed in this environemt and does not pollute your system variables. It is a good practice to always use virtual environment while working on a project.

```sh
# Let's install Flask
(venv) $ pip install Flask
(venv) $ pip install gunicorn
```
So Flask has been installed on our virtual environment. If you are using any other external package, you need to install them as well. Along with flask, we have installed an additional package `Gunicorn`. This is a WSGI HTTP server for Unix systems, the scope of which is beyond this tutorial

### requirements.txt
We know that our virtual environment has installed all the stuff it needs to run. But how will Heroku know what all packages are to be installed before deploying? We thus use a txt file called `readme.txt` which contains all the  packages which should be installed by Heroku before deploying.

```sh
(venv) $ pip freeze > requirements.txt
```
`pip freeze` is a python line command which shows all the packages in the current environment. The `>` operator takes the input from its left side and appends that to the file in the right. This will create a file `readme.txt` which will contain necessary packages to be installed.

### Procfile
Procfile are the file which tells the PaaS which file is to be run as a web app. Create a new file and name it `Procfile`. Let's say the controller of your flask app is a file names `xyz.py` then in the `Procfile`, add `web: gunicorn xyz:app --log-file -`
This will tell Heroku that it needs to run `xyz.py` file

### .env
Create a new file named `.env` and fil its content with `TIMES=2`. This will tell Heroku to try two times if the environment has some trouble starting up.

We are all set up now to deploy out Flask app to Heroku, but we will also need to set up git for our project directory so that Heroku can get the diff

```sh
# initialize the git repo in directory
(venv) $ git init
(venv) $ heroku git:remote -a <repo-name>
```
Or if you already have an existing git repo

```sh
(venv) $ heroku git:remote -a <repo-name>
```

### Deploying the application :rocket:
All set. We are ready to deploy our Flask app to Heroku now

```sh
(venv) $ git add .
(venv) $ git commit -m "commit message here"
(venv) $ git push heroku master
```
