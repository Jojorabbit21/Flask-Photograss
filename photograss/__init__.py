from flask import Flask, jsonify, render_template
import os
import json

app = Flask(__name__)

def get_project_list():
  with open('./static/projects.json') as f:
    js = json.load(f)
  name = []; folder = []; endpoint = []
  for project in js['projects']:
    name.append(project['name'])
    folder.append(project['folder'])
    endpoint.append(project['endpoint'])
  return name, folder, endpoint

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

@app.route('/project')
def project():
  path_dir = './static/image/project'
  folder_list = os.listdir(path_dir)
  name, folder, endpoint = get_project_list()
  return render_template('project.html', title='Projects', projects = folder_list, length = len(name), name = name, folder = folder, endpoint = endpoint)  

@app.route('/project/<page>')
def project_page(page):
  name, folder, endpoint = get_project_list()
  path_dir = f'./static/image/project/{page}'
  file_list = os.listdir(path_dir)
  return render_template('project_page.html', title=name[int(page)-1], file_list = file_list, folder = folder[int(page)-1])

@app.route('/commercial')
def commercial():
  return render_template('commercial.html', title='Commercials')  

@app.route('/photobook')
def photobook():
  return render_template('photobook.html', title='Photobooks')  

if __name__ == "__main__":
  app.run(host='0.0.0.0', port='5000')