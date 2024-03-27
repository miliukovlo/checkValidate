const isValidSigns = (str) => {
    const checkStr = [];
    let isSuccess = false;
    let resultText = document.getElementById('result');

    if (str.length === 0) {
        resultText.innerHTML = 'Проверка пройдена с ошибками!';
        resultText.classList.remove('result-complete');
        resultText.classList.add('result-failed');
        return isSuccess;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            checkStr.push(str[i]);
        } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if (checkStr.length === 0 || checkStr[checkStr.length - 1] !== correctSignBefore(str[i])) {
                resultText.innerHTML = 'Проверка пройдена с ошибками!';
                resultText.classList.remove('result-complete');
                resultText.classList.add('result-failed');
                return isSuccess;
            }
            checkStr.pop();
        }
    }

    isSuccess = checkStr.length === 0;

    if (isSuccess) {
        resultText.innerHTML = 'Проверка пройдена успешно!';
        resultText.classList.remove('result-failed');
        resultText.classList.add('result-complete');
    } else {
        resultText.innerHTML = 'Проверка пройдена с ошибками!';
        resultText.classList.remove('result-complete');
        resultText.classList.add('result-failed');
    }

    return isSuccess;
};

const correctSignBefore = (sign) => {
    switch (sign) {
        case ')': 
            return '(';
        case ']': 
            return '[';
        case '}': 
            return '{';
        default: 
            return '';
    }
};
