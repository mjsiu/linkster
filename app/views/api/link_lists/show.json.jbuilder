json.array! @link_list do |list|
  json.title link_list.title
  json.user link_list.user.username

  json.links list.links do |link|
    json.link_title link.title
    json.link_url link.url
    json.link_description link.description
end
