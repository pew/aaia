package main

import (
	"fmt"
	"os"
	"strings"
)

var alphabet = map[string]string{"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "0": "zero", "@": "at sign", " ": " ", ".": "dot", "a": "alpha", "b": "bravo", "c": "charlie", "d": "delta", "e": "echo", "f": "foxtrot", "g": "golf", "h": "hotel", "i": "india", "j": "juliet", "k": "kilo", "l": "lima", "m": "mike", "n": "november", "o": "oscar", "p": "papa", "q": "quebec", "r": "romeo", "s": "sierra", "t": "tango", "u": "uniform", "v": "victor", "w": "whiskey", "x": "xray", "y": "yankee", "z": "zulu"}

func main() {
    args := strings.ToLower(strings.Join(os.Args[1:], ""))
	input := strings.Split(args, "")
	aaia(input)
}

func aaia(in []string) {
	formatString := "%s - %s\n"

	for _, v := range in {
		if v == " " {
			fmt.Printf("\n")
			continue
		}
		fmt.Printf(formatString, v, alphabet[v])
	}
}
