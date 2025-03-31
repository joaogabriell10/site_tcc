package com.itb.tcc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.itb.tcc.entity.EntityBase;

@NoRepositoryBean
public abstract interface RepositoryBase<Entity extends EntityBase> extends JpaRepository<Entity, Long> {
    List<Entity> findAllByStatus(byte status);
}
