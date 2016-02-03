json.array! @links do |link|
  json.title link.title
  json.url link.url
  json.description link.description
  json.user link.user.username
end
