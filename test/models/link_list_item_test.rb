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

require 'test_helper'

class LinkListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
