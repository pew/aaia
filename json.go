package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"strings"
)

var tpl *template.Template
var alphabet = map[string]string{"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "0": "zero", "a": "alpha", "b": "bravo", "c": "charlie", "d": "delta", "e": "echo", "f": "foxtrot", "g": "golf", "h": "hotel", "i": "india", "j": "juliet", "k": "kilo", "l": "lima", "m": "mike", "n": "november", "o": "oscar", "p": "papa", "q": "quebec", "r": "romeo", "s": "sierra", "t": "tango", "u": "uniform", "v": "victor", "w": "whiskey", "x": "xray", "y": "yankee", "z": "zulu"}

func main() {
	aaia("hello jones 123")
}

type output struct {
	Input string
	Words []string
}

func aaia(in string) {
	input := strings.Split(strings.ToLower(in), "")

	output := &output{
		Input: in,
		Words: []string{},
	}

	for _, v := range input {
		if val, ok := alphabet[v]; ok {
			output.Words = append(output.Words, val)
		}
	}

	o, _ := json.Marshal(output)

	fmt.Println(string(o))
}
