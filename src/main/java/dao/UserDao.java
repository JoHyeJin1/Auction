package dao;

import com.auction.auctionapp.domain.User;

public interface UserDao {

        User findById(String userId);
        void insertUser(User user);
        void updateUser(User user);
        void deleteUser(String userId);
}
