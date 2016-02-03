# == Schema Information
#
# Table name: link_list_items
#
#  id           :integer          not null, primary key
#  link_list_id :integer          not null
#  link_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class LinkListItem < ActiveRecord::Base
end
