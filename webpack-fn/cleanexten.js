



const cleanExten = (filename) => {
    const splitedArr = filename.split('.')
      if( splitedArr.length < 2) return true
      const poped = splitedArr.pop()
      if(!poped) return true
      const extension = poped.toLowerCase();
      if (extension === 'txt' || extension === 'html' || extension === 'js') {
        console.log('cleanExten.js: ', filename, ' is not deleted')
          return false; //삭제
      } 
      return true;
  };
  
  module.exports = {
    cleanExten
  };