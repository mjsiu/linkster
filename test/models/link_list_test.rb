# == Schema Information
#
# Table name: link_lists
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class LinkListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
