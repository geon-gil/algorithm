function solution(numbers) {
    var answer = [];
    
    for (i=0; i<numbers.length; i++) {
        for (j=i+1; j<numbers.length; j++) {
            if (answer.includes(numbers[i]+numbers[j])) {
                continue
            } else {
                answer.push(numbers[i]+numbers[j])
            };
        };
    };
    
    answer.sort(function compare(a, b) {
        return a-b
    });
    
    
    return answer;
}