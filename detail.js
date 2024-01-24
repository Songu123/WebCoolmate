var feature_icon = document.querySelector('.feature-icon');
var feature_add = document.querySelector('.feature-icon span');
var feature_content = document.querySelector('.feature-content');

feature_icon.addEventListener('click', function() {
    if (feature_content.classList.contains('feature-none')) {
        feature_content.classList.remove('feature-none');
        feature_add.style.transform = "rotate(45deg)";
        // feature_close.style.display = "none";
    } else {
        feature_content.classList.add('feature-none');
        feature_add.style.transform = "rotate(0deg)";
    }
});