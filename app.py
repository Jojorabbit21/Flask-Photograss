from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def gateway():
  return render_template('index.html', title='Index')

@app.route('/main')
def main():
  path_dir = './static/image/carousel'
  file_list = os.listdir(path_dir)
  return render_template('main.html', title='Main', file_list = file_list)

@app.route('/snap')
def snap():
  path_dir = './static/image/snap'
  file_list = os.listdir(path_dir)
  return render_template('snap.html', title='Snap', file_list = file_list)

@app.route('/contact')
def contact():
  return render_template('contact.html', title='Contact')  

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5000, debug=True)