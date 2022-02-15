from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def gateway():
  return render_template('index.html', title='Index')

@app.route('/main')
def main():
  return render_template('main.html', title='Main')

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5000, debug=True)