package com.learning.pl.scheduler;

import com.learning.pl.repository.PlayerDao;
import jakarta.transaction.Transactional;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DataResetScheduler {
    public final PlayerDao playerDao;

    public DataResetScheduler(PlayerDao playerDao) {
        this.playerDao = playerDao;
    }

    @Scheduled(fixedRate = 360000)
    @Transactional
    public void resetData() {
        System.out.println("Resetting data...");
        playerDao.deleteAll();
        playerDao.restoreFromBackup();
        System.out.println("Data restored!");
    }
}
