		var article_temp = document.getElementById('articles-template-recent-list');
		var quotes_temp = document.getElementById('quote-template');
		Swag.registerHelpers(Handlebars);
		article_temp = Handlebars.compile(article_temp.innerHTML);
		quotes_temp = Handlebars.compile(quotes_temp.innerHTML);
		var get_most_x_recent_articles = function (articles, number_of_most_recent){
			var art = articles.sort(function(a, b) {
			  if (a.date < b.date){ return 1;}
			  if (a.date > b.date){ return -1;}
			});
			if (number_of_most_recent >= art.length) {
				var slice_num = art.length;
			}
			else {
				var slice_num = number_of_most_recent;
			}
			return art.splice(0, slice_num);
		}
		var get_quote = function(quotes){
			//get a random quote
			return quotes[Math.floor(Math.random() * (quotes.length - 1))];
		}
		var mostRecent = {articles: get_most_x_recent_articles(articles, 3)};
		var recentArticlesHtml  = article_temp(mostRecent);
		document.getElementById('recent-articles').innerHTML = recentArticlesHtml;
		var quote = get_quote(quotes);
		var quoteHtml  = quotes_temp({quote: quote});
		document.getElementById('pithy-quote').innerHTML = quoteHtml;