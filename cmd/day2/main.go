package main

import (
	"bufio"
	"os"
	"strconv"
	"strings"
)

func main() {
	fileName := os.Args[1]

	reports := parseInput(fileName)

	println("Safe Reports:", countSafety(reports, 0))

	println("Safe Reports (t=1):", countSafety(reports, 1))
}

func countSafety(reports [][]int, tolerance int) int {
	totalSafe := 0

	for _, report := range reports {
		bad := 0

		var increasing bool
		if report[0]-report[1] > 0 {
			increasing = false
		} else {
			increasing = true
		}
		for i := 0; i < len(report)-1; i++ {
			diff := report[i] - report[i+1]
			if diff < 0 {
				if !increasing {
					bad++
				}
			} else if diff > 0 {
				if increasing {
					bad++
				}
			}
			if diff < 0 {
				diff = -diff
			}
			if diff > 3 || diff == 0 {
				bad++
			}
		}

		if bad <= tolerance {
			totalSafe++
		}
	}

	return totalSafe
}

func parseInput(fileName string) [][]int {
	file, err := os.Open(fileName)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	var reports [][]int

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		var report []int
		for _, parsed := range strings.Split(line, " ") {
			num, err := strconv.Atoi(parsed)
			if err != nil {
				panic(err)
			}
			report = append(report, num)
		}
		reports = append(reports, report)
	}

	return reports
}
