package dao;

public interface InterestDao {
    List<Interest> findByUserId(String userId);
    void insertInterest(Interest interest);
    void deleteInterest(Long interestId);
}

