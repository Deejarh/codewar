function formateDate(seconds) {

    // return HH:MM:SS
    if (seconds < 0) return "seconds must be a postive value";
    let HH = parseInt(seconds / 3600);
    let minutes = parseFloat(seconds % 3600);
    let MM = parseInt(minutes / 60);
    let SS = parseInt(minutes % 60);
  
    return `${HH < 10 ? `0${HH}` : HH}:${MM < 10 ? `0${MM}` : MM}:${
      SS < 10 ? `0${SS}` : SS
    }`;
  }
  
  console.log(formatDate(359999))