
//copy-paste array of numbers from the console
const dataDay1_1 = [1749, 1897, 881, 1736, 1161, 1720, 1676, 305, 264, 1904, 1880, 1173, 483, 1978, 1428, 1635, 1386, 1858, 1602, 1916, 1906, 1212, 1730, 1777, 1698, 1845, 1812, 1922, 1729, 1803, 1761, 1901, 1748, 1188, 1964, 1935, 1919, 1810, 1567, 1849, 1417, 1452, 54, 1722, 1784, 1261, 1744, 1594, 1526, 1771, 1762, 1894, 1717, 1716, 51, 1955, 1143, 1741, 1999, 1775, 1944, 1983, 1962, 1198, 1553, 1835, 1867, 1662, 1461, 1811, 1764, 1726, 1927, 1179, 1468, 1948, 1813, 1213, 1905, 1371, 1751, 1215, 1392, 1798, 1823, 1815, 1923, 1942, 1987, 1887, 1838, 1395, 2007, 1479, 1752, 1945, 1621, 1538, 1937, 565, 1969, 1493, 1291, 1438, 1578, 1770, 2005, 1703, 1712, 1943, 2003, 1499, 1903, 1760, 1950, 1990, 1185, 1809, 1337, 1358, 1743, 1707, 1671, 1788, 1785, 1972, 1863, 1690, 1512, 1963, 1825, 1460, 1828, 1902, 1874, 1755, 1951, 1830, 1767, 1787, 1373, 1709, 1514, 1807, 1791, 1724, 1859, 1590, 1976, 1572, 1947, 1913, 1995, 1728, 1624, 1731, 1706, 1782, 1994, 1851, 1843, 1773, 1982, 1685, 2001, 1346, 1200, 1746, 1520, 972, 1834, 1909, 2008, 1733, 1960, 1280, 1879, 1203, 1979, 1133, 1647, 1282, 1684, 860, 1444, 1780, 1989, 1795, 1819, 1797, 1842, 1796, 1457, 1839, 1853, 1711, 1883, 1146, 1734, 1389]


const testDataDay1_1 = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

// const sumOfPairs = array => {

//   //first nr
//   for (let i = 0; i < array.length - 1; i++) {

//     //second nr
//     for (let j = i; j < array.length - 1; j++) {

//       let sum = array[i] + array[j + 1]

//       if (sum === 2020) {
//         console.log(`pairs day 1_1: ${array[i]}, ${array[j + 1]}`)
//         return array[i] * array[j + 1]
//       }
//     }
//   }
// }

// console.log(sumOfPairs(testDataDay1_1))

// const solutionDay1_1 = sumOfPairs(dataDay1_1)
// console.log(`solution day 1_1: ${solutionDay1_1}`)

//solution:
// _> 51, 1969
// _> 100419




//----- attempt to import the txt file, please IGNORE :) -----------

//how to import data?
// _> implement FileReader object https://developer.mozilla.org/en-US/docs/Web/API/FileReader
//https://www.youtube.com/watch?v=dD2rea_fCFk

//select input element
const input = document.querySelector("input")
const textarea = document.querySelector("textarea")


var sumOfPairs = array => {

  //first nr
  for (let i = 0; i < array.length - 1; i++) {

    //second nr
    for (let j = i; j < array.length - 1; j++) {

      let sum = array[i] + array[j + 1]

      if (sum === 2020) {
        console.log(`pairs day 1_1: ${array[i]}, ${array[j + 1]}`)
        return array[i] * array[j + 1]
      }
    }
  }
}

var lines;

// asynchronous function!
input.addEventListener("change", () => {

  //get all the files
  const files = input.files
  console.log(input.files)

  // console.log(`files: ${files}`) //[object FileList]

  //exit if no files were selected
  if (files.length === 0) return;

  const file = files[0]
  console.log(`file: ${file}`) //[object File]

  //API!
  const reader = new FileReader()

  //first event
  reader.onload = () => {

    //get the text out of the file
    //when the reader finishes loading, we read the result
    const text = reader.result
    console.log(`text: ${text}`) //all the nrs in a column
    console.log(typeof (text)) //string

    //to read it line-by-line
    lines = text.split(/\r\n|\n/) //array of strings!
    const correctResult = sumOfPairs(lines) //undefined
    console.log(correctResult)
    // console.log(sumOfPairs(lines))

    // sumOfPairs(lines)
    // console.log(result)
    // console.log(sumOfPairs(lines))
    console.log(lines)
    console.log(typeof (lines)) //object (=array!)
    console.log(`lines: ${lines}`) //all nrs separated with comma in a paragraph

    //joining new lines by the new line character
    textarea.value = lines //displays nrs in textarea 
  }

  reader.onerror = (e) => alert(e.target.error.name)

  reader.readAsText(file)
})











// console.log(lines)
