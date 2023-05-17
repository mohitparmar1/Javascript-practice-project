var count = 0;

function ChangeCount(num) {
    count += num;
    document.getElementById('count').innerHTML = count;
}