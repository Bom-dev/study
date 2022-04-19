const quotes = [
    {
        quote: "Age is just a number. It's irrelevant unless, of course, you happen to be a bottle of wine.",
        author: "- Joan Collins"
    },
    {
        quote: "I cook with wine, sometimes I even add it to the food.",
        author: "- W.C. Fields"
    },
    {
        quote: "My only regret in life is that I did not drink more wine.",
        author: "- Ernest Hemingway"
    },
    {
        quote: "Pour yourself a drink, put on some lipstick, and pull yourself together.",
        author: "- Elizabeth Taylor"
    },
    {
        quote: "What wine goes with Captain Crunch?",
        author: "- George Carlin"
    },
    {
        quote: "I drink and I know things.",
        author: "- Tyrion Lannister, Game of Thrones"
    },
    {
        quote: "Wine is bottled poetry.",
        author: "- Robert Louis Stevenson"
    },
    {
        quote: "Beer is made by men, wine by God!",
        author: "- Martin Luther"
    },
    {
        quote: "Wine makes daily living easier, less hurried, with fewer tensions and more tolerance.",
        author: "- Benjamin Franklin"
    },
    {
        quote: "Nothing makes the future look so rosy as to contemplate it through a glass of Chambertin.",
        author: "- Napoleon"
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;