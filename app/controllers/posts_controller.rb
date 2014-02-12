class PostsController < InheritedResources::Base

  [:create, :update, :destroy].each do |action|
    define_method action do
      send "#{action}!" do |success, failure|
        success.html { redirect_to root_url }
      end
    end
  end

  protected

  def build_resource_params
    [params.fetch(:post, {}).permit(:title, :content)]
  end
end
