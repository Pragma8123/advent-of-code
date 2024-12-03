import axios from 'axios';
import { JSDOM } from 'jsdom';

const { AOC_COOKIE_SESSION: cookieSession } = process.env;

export const fetchInput = async (day: number, year: number) => {
  const baseUrl = `https://adventofcode.com/${year}/day/${day}`;

  console.log(`❗ Fetching input for ${baseUrl}`);

  if (new Date() < new Date(`${year}-12-${day}`)) {
    throw Error('Cannot fetch input before puzzle is released');
  }

  if (cookieSession == null) {
    throw Error('Session cookie does not exist');
  }

  const url = `${baseUrl}/input`;
  const response = await axios.get(url, {
    headers: { Cookie: `session=${cookieSession}` }
  });

  return response.data.replace(/\r?\n$/, '');
};

export const fetchExampleInput = async (day: number, year: number) => {
  const url = `https://adventofcode.com/${year}/day/${day}`;

  console.log(`❗ Fetching example input for ${url}`);

  if (new Date() < new Date(`${year}-12-${day}`)) {
    throw Error('Cannot fetch example input before puzzle is released');
  }

  if (cookieSession == null) {
    throw Error('Session cookie does not exist');
  }

  const response = await axios.get(url);
  const dom = new JSDOM(response.data);

  const exampleInputElement = dom.window.document.querySelector('pre>code');

  if (exampleInputElement == null) {
    throw Error('Example input element does not exist');
  }

  const exampleInput = exampleInputElement.textContent;

  if (exampleInput == null) {
    throw Error('Example input does not exist');
  }

  return exampleInput.replace(/\r?\n$/, '');
};
