json.array! @user_links do |link|
  json.title link.title
  json.url link.url
  json.description link.description
end

json.array! @user_list_links do |link_list|
  json.title link_list.title
  json.description link_list.description
end
