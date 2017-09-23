# Make a project folder
```
$ mkdir djangogirls
$ cd djangogirls
```

# Make a virtualenv
```
$ python3 -m venv myvenv
```

# Start virtual environment
```
$ source myvenv/bin/activate
```

# Install Django
```
(myvenv) ~$ pip install --upgrade pip
(myvenv) ~$ pip install django~=1.11.0
```

# Install Python
```
sudo apt-get install python3.6
```

# Start a Django project
```
(myvenv) ~/djangogirls$ django-admin startproject mysite .
```

# Starting the web server
```
(myvenv) ~/djangogirls$ python3 manage.py runserver 0.0.0.0:8000
```

In the browser view at:
http://localhost:8000/

# Creating an application
```
(myvenv) ~/djangogirls$ python3 manage.py startapp blog
```

# Migrations
After creating a model or editing a model, the database needs to know about the changes.

1. First make migrations
```
(myvenv) ~/djangogirls$ python3 manage.py makemigrations blog
```

2. Second migrate
```
(myvenv) ~/djangogirls$ python3 manage.py migrate blog
```

# Admin
To create a user:
```
(myvenv) ~/djangogirls$ python3 manage.py createsuperuser
```
