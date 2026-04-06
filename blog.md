---
layout: default
title: Blog
---

<section id="blog-header" class="hero" style="min-height: 40vh; align-items: center; text-align: center;">
    <h1>개발 블로그</h1>
    <p class="bio" style="margin-bottom: 0;">개발하면서 겪은 경험과 지식을 정리합니다.</p>
</section>

<section id="all-posts">
    <div class="posts-list">
        {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}" class="post-item" style="color:inherit; text-decoration: none;">
            <div class="post-meta">{{ post.date | date: "%Y년 %m월 %d일" }}</div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        </a>
        {% else %}
        <div class="glass-card">
            <p style="text-align:center;">작성된 포스트가 없습니다.</p>
        </div>
        {% endfor %}
    </div>
</section>
