$(document).ready(init);

let QUOTES = null;

function init() {
    console.log('Look at me!!!! I have INIT');
    $('.js-quotes-btn').on('click', onClickQuotes);
}

function onClickQuotes(event) {
    getQuotes();
}

function getQuotes() {
    
    $.ajax({
        method: 'GET',
        url: '/quotes',
    })
    .then(function(response) {
        console.log(response);
        QUOTES = response;
        render();
    })
    .catch(function(error) {
        console.log(error);
    });
    
    render(true);
    console.log('Getting Quote');
}

function getNextQuote() {
    // AJAX for NEXT QUOTE
}

function render(showLoading) {
    console.log('render - showLoading: ', showLoading);
    const $quoteList = $('.js-quote-list');

    if (showLoading) {
        $quoteList.append(`<li>Loading...</li>`);
        return true;
    }

    $quoteList.empty();
    $quoteList.append(`
        <li>
            <p>${QUOTES.text}</p>
            <em>${QUOTES.author}</em>
        </li>
    `);
    // for (let quote of QUOTES) {
    //     $quoteList.append(`
    //         <li>
    //             <p>${quote.text}</p>
    //             <em>${quote.author}</em>
    //         </li>
    //     `);
    // } 

}