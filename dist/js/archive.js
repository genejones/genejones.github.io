console.log("loaded js");
$(document).ready(function(){
	window.BlogTopics = {};
	for (var i=0; i<articles.length; i++){
		var article = articles[i];
		var topics = article.category.split(',');
		for (var j=0; j<topics.length; j++){
			var topic = topics[j];
			if (! window.BlogTopics.hasOwnProperty(topic)){
				window.BlogTopics[topic] = {'title':topic, 'articles':[]};
			}
			window.BlogTopics[topic].articles.push(article);
		}
	}
	var source = document.getElementById('archive-topic-list');
	Swag.registerHelpers(Handlebars);
	var template = Handlebars.compile(source.innerHTML);
	var context = {topics: BlogTopics};
	var html  = template(context);
	document.getElementById('topicsContainer').innerHTML = html;
});
$(document).ready(function(){
	var get_articles_by_year_and_date = function (articlesList){
		var articlesListedByYearAndMonth = {};
		//first sort in reverse order of date. This prevents us from worrying about if the articles will be in the correct order within the month
		var art = articlesList.sort(function(a, b) {
		  if (a.date < b.date){ return -1;}
		  if (a.date > b.date){ return 1;}
		});
		for (var i=0; i<art.length; i++){
			var article = art[i]
			var year = article.date.getFullYear();
			if (!articlesListedByYearAndMonth.hasOwnProperty(year)){
				articlesListedByYearAndMonth[year] = {};
			}
			var month = moment(article.date).format('MMMM');
			if (!articlesListedByYearAndMonth[year].hasOwnProperty(month)){
				articlesListedByYearAndMonth[year][month] = [];
			}
			articlesListedByYearAndMonth[year][month].push(article);
		}
		return articlesListedByYearAndMonth;
	}
	var articlesListedByYearAndMonth = get_articles_by_year_and_date(articles);
	var source = document.getElementById('archive-year-list');
	Swag.registerHelpers(Handlebars);
	var template = Handlebars.compile(source.innerHTML);
	var context = {list: articlesListedByYearAndMonth};
	var html  = template(context);
	document.getElementById('archiveListContainer').innerHTML = html;
});