var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    "“A friend is someone who knows all about you and still loves you.”",
    "“To live is the rarest thing in the world. Most people exist, that is all.”",
    "“Always forgive your enemies; nothing annoys them so much.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“Without music, life would be a mistake.”",
  ];

  function displayQuote() {
    var Quote = "";
    var i = Math.floor(Math.random() * quotes.length);
    Quote += `<quote class="fs-2 fw-bold p-1">${quotes[i]}</quote>`;
    
    document.getElementById("demo").innerHTML = Quote;

}
