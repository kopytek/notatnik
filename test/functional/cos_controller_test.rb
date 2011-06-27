require 'test_helper'

class CosControllerTest < ActionController::TestCase
  test "should get say" do
    get :say
    assert_response :success
  end

end
