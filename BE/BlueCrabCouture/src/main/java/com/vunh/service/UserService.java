package com.vunh.service;

import com.vunh.entity.UserAccount;
import com.vunh.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserAccountRepository userAccountRepository;

    public List<UserAccount> getAllUserAccount() {
        return this.userAccountRepository.findAll();
    }

    public Optional<UserAccount> findByIdUserAccount(Integer id) {
        return this.userAccountRepository.findById(id);
    }

    public UserAccount storeOrUpdateUserAccount(UserAccount account) {
        return this.userAccountRepository.save(account);
    }

    public void deleteUserAccount(Integer id) {
        Optional<UserAccount> userAccount = findByIdUserAccount(id);
        if (userAccount.isPresent()) {
            this.userAccountRepository.delete(userAccount.get());
        } else {
            throw new RuntimeException("Can't delete this user!");
        }
    }

    public UserAccount lockOrUnlokUserAccount(Integer id, Boolean type) {
        Optional<UserAccount> account = this.findByIdUserAccount(id);
        if (account.isPresent()) {
            account.get().setIsLocked(type);
            return this.userAccountRepository.save(account.get());
        }
        throw new RuntimeException("Please try again!");
    }
}
