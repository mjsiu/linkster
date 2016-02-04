# == Schema Information
#
# Table name: links
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  url         :text             not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Link < ActiveRecord::Base

  belongs_to :user
  belongs_to :link_list_items
  has_many :link_lists,
  through: :link_list_items

end
