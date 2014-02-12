class PostsController < InheritedResources::Base
  def create
    create! do |success, failure|
      success.html { redirect_to root_url }
    end
  end

  def update
    update! do |success, failure|
      success.html { redirect_to root_url }
    end
  end

  protected

  def build_resource_params
    [params.fetch(:post, {}).permit(:title, :content)]
  end
end
