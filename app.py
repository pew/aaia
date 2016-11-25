from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

abc = {'1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '0': 'zero', '@': 'at sign', ' ': ' ','.': 'dot', 'a':'alpha', 'b':'bravo','c':'charlie', 'd':'delta', 'e':'echo', 'f':'foxtrot', 'g':'golf', 'h': 'hotel', 'i':'india', 'j':'juliet', 'k':'kilo', 'l':'lima', 'm':'mike', 'n':'november', 'o':'oscar', 'p':'papa', 'q':'quebec', 'r':'romeo', 's':'sierra', 't':'tango', 'u':'uniform', 'v':'victor', 'w':'whiskey', 'x':'xray', 'y':'yankee', 'z':'zulu'}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    wordIn = request.form['abc'].strip().lower()

    chars = []

    for char in wordIn:
        if char in abc:
            chars.append(abc[char])

    return render_template('translate.html', chars=chars, wordIn=wordIn)

@app.route('/t/<input>', methods=['GET'])
def t(input=None):
    wordIn = input.strip().lower()
    chars = []

    for char in wordIn:
        if char in abc:
            chars.append(abc[char])
    return jsonify(chars)

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0',port=5000)
