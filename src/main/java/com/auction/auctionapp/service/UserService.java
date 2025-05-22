package com.auction.auctionapp.service;

import org.springframework.stereotype.Service;

import com.auction.auctionapp.repository.UserRepository;

import domain.User;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 사용자 인증: username + password가 맞는지 확인
     */
    public boolean authenticate(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.isPresent() && user.get().getPassword().equals(password);
    }

    /**
     * 사용자 단건 조회
     */
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * 회원가입 (중복 체크 포함)
     */
    public boolean registerUser(User user) {
        if (userRepository.existsById(user.getUsername())) {
            return false; // 아이디 중복
        }
        userRepository.save(user);  // ✅ 여기서 DB 저장
        return true;x
    }
}
