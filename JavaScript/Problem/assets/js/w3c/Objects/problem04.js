/**
 * 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 */

const findReadStatus = arrOfObj => {
    let len = arrOfObj.length;
    let text = [];
    for (let i = 0; i < len; i++) {
        if (arrOfObj[i].readingStatus == true) {
            text[i] = `Already read "${arrOfObj[i].title}" by - ${arrOfObj[i].author}\n`;
        } else {
            text[i] = `You still need to read "${arrOfObj[i].title}" by - ${arrOfObj[i].author}\n`;
        }
    }

    return [text]
}

const library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   const [text] = findReadStatus(library);
   console.log(text);
   console.log(text.join(''));