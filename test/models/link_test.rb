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

require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
