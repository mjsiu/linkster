json.array! @link_lists do |link_list|
  json.title link_list.title
  json.description link_list.description
  json.user link_list.user.username
end
