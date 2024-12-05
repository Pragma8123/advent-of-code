package main

import (
	"bufio"
	"os"
	"slices"
	"strconv"
	"strings"
)

func main() {
	filename := os.Args[1]

	left, right := parseFile(filename)

	slices.Sort(left)
	slices.Sort(right)

	total := 0

	for i, v := range left {
		x := v - right[i]
		if x < 0 {
			x = -x
		}
		total += x
	}

	println("Part1:", total)
}

func parseFile(filename string) ([]int, []int) {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	var left, right []int

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		nums := strings.Split(scanner.Text(), "   ")

		if l, err := strconv.Atoi(nums[0]); err != nil {
			panic(err)
		} else {
			left = append(left, l)
		}

		if r, err := strconv.Atoi(nums[1]); err != nil {
			panic(err)
		} else {
			right = append(right, r)
		}
	}

	return left, right
}
