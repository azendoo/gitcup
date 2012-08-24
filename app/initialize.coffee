$ ->
  $('.btn-tweet').click ->
    username = $('input.username').val()
    rule_number = $('select.rule_number').val()

    message = encodeURI "#{username} won a GitCup for breaking rule #{rule_number}"
    hashtag = "rule#{rule_number}"
    url = "https://twitter.com/intent/tweet?hashtags=#{hashtag}&text=#{message}&url=http%3A%2F%2Fgitcup.com&via=git_cup"
    window.open url
