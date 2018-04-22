class ContributionQuery < Query
  base_query Contribution.all

  def add_email_filter(value)
    query.joins(:users).where(users:{email:value})
  end

end