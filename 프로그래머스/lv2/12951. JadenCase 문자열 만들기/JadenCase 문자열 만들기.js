function solution(s) {
      const data = s.split(' ')
        .map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase());

    return data.join(' ');
}  