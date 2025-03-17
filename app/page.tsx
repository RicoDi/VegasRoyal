'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [leaderboard, setLeaderboard] = useState([
        {
            id: 1,
            name: 'AlexVegas',
            winnings: '$12,450',
            avatar: 'https://i.pravatar.cc/150?img=1',
        },
        {
            id: 2,
            name: 'PokerQueen',
            winnings: '$9,870',
            avatar: 'https://i.pravatar.cc/150?img=5',
        },
        {
            id: 3,
            name: 'JackpotKing',
            winnings: '$8,340',
            avatar: 'https://i.pravatar.cc/150?img=3',
        },
        {
            id: 4,
            name: 'LuckyCharm',
            winnings: '$7,650',
            avatar: 'https://i.pravatar.cc/150?img=4',
        },
        {
            id: 5,
            name: 'RoyalFlush',
            winnings: '$6,920',
            avatar: 'https://i.pravatar.cc/150?img=2',
        },
    ]);

    const videoRef = useRef(null);

    const popularGames = [
        {
            id: 1,
            name: 'Golden Slots',
            image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            players: '2,345',
        },
        {
            id: 2,
            name: 'Royal Roulette',
            image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            players: '1,987',
        },
        {
            id: 3,
            name: 'VIP Poker',
            image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            players: '3,210',
        },
        {
            id: 4,
            name: 'Luxury Blackjack',
            image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            players: '1,756',
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Michael R.',
            quote: 'Vegas Royale changed my evenings! The tournaments are so exciting!',
            avatar: 'https://i.pravatar.cc/150?img=11',
        },
        {
            id: 2,
            name: 'Sarah L.',
            quote: 'I won my first jackpot last week! The games are fair and so much fun.',
            avatar: 'https://i.pravatar.cc/150?img=12',
        },
        {
            id: 3,
            name: 'David K.',
            quote: 'The VIP program is worth every penny. Exclusive games and amazing rewards!',
            avatar: 'https://i.pravatar.cc/150?img=13',
        },
    ];

    // Simulate leaderboard updates
    useEffect(() => {
        const interval = setInterval(() => {
            const newLeaderboard = [...leaderboard];
            // Shuffle winnings slightly
            newLeaderboard.forEach((player) => {
                const currentAmount = parseInt(player.winnings.replace(/[$,]/g, ''));
                const newAmount = currentAmount + Math.floor(Math.random() * 200) - 100;
                player.winnings = '$' + newAmount.toLocaleString();
            });
            // Sort by winnings
            newLeaderboard.sort((a, b) => {
                return (
                    parseInt(b.winnings.replace(/[$,]/g, '')) -
                    parseInt(a.winnings.replace(/[$,]/g, ''))
                );
            });
            setLeaderboard(newLeaderboard);
        }, 5000);

        return () => clearInterval(interval);
    }, [leaderboard]);

    // Carousel auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % popularGames.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [popularGames.length]);

    // Video background autoplay
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Video autoplay failed:', error);
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50 px-6 py-4 border-b border-gold/30">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gold">
                            <span className="text-red-600">Vegas</span> Royale
                        </h1>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#"
                            className="text-gold hover:text-red-600 transition-colors duration-300"
                        >
                            Играть
                        </a>
                        <a
                            href="#"
                            className="text-gold hover:text-red-600 transition-colors duration-300"
                        >
                            Турниры
                        </a>
                        <a
                            href="#"
                            className="text-gold hover:text-red-600 transition-colors duration-300"
                        >
                            Призы
                        </a>
                        <a
                            href="#"
                            className="text-gold hover:text-red-600 transition-colors duration-300"
                        >
                            О нас
                        </a>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-pulse">
                            Регистрация
                        </button>
                    </div>

                    <button className="md:hidden text-gold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0 z-0 bg-black/60">
                    {/* Video background would go here in production */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596731405980-1b3825f9c8fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>

                    {/* Animated casino elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-600 rounded-full animate-ping opacity-20"></div>
                        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gold rounded-full animate-ping opacity-10 delay-300"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-red-600 rounded-full animate-ping opacity-15 delay-700"></div>
                    </div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Испытайте удачу в{' '}
                        <span className="text-gold animate-pulse">Vegas Royale!</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
                        Окунитесь в мир азарта и роскоши с нашим премиальным социальным казино
                    </p>
                    <button className="bg-red-600 text-white text-xl px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30">
                        Начать игру
                    </button>
                </div>
            </section>

            {/* Popular Games Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gold">
                        Популярные игры
                    </h2>

                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${(activeSlide * 100) / popularGames.length}%)`,
                                width: `${popularGames.length * 100}%`,
                            }}
                        >
                            {popularGames.map((game, index) => (
                                <div
                                    key={game.id}
                                    className="w-full md:w-1/2 lg:w-1/4 px-4"
                                    style={{ flex: `0 0 ${100 / popularGames.length}%` }}
                                >
                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-gold/20 h-full">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={game.image}
                                                alt={game.name}
                                                className="w-full h-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                            <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                                {game.players} игроков
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-gold mb-2">
                                                {game.name}
                                            </h3>
                                            <button className="w-full bg-gold/20 hover:bg-gold/30 text-gold py-2 rounded-md transition-colors duration-300">
                                                Играть сейчас
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {popularGames.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-gold' : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Tournament Leaderboard */}
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gold">
                        Таблица лидеров
                    </h2>

                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/5">
                        <div className="bg-gradient-to-r from-gold/20 to-red-900/20 px-6 py-4 border-b border-gold/20">
                            <div className="grid grid-cols-12 gap-4 text-gold font-bold">
                                <div className="col-span-1 text-center">#</div>
                                <div className="col-span-7 md:col-span-5">Игрок</div>
                                <div className="col-span-4 md:col-span-6 text-right">Выигрыш</div>
                            </div>
                        </div>

                        <div className="divide-y divide-gold/10">
                            {leaderboard.map((player, index) => (
                                <div
                                    key={player.id}
                                    className="px-6 py-4 hover:bg-gray-800/50 transition-colors duration-200"
                                >
                                    <div className="grid grid-cols-12 gap-4 items-center">
                                        <div className="col-span-1 text-center font-bold text-gold">
                                            {index + 1}
                                        </div>
                                        <div className="col-span-7 md:col-span-5 flex items-center">
                                            <img
                                                src={player.avatar}
                                                alt={player.name}
                                                className="w-10 h-10 rounded-full border-2 border-gold/30 mr-3"
                                            />

                                            <span className="font-medium">{player.name}</span>
                                        </div>
                                        <div className="col-span-4 md:col-span-6 text-right text-gold font-bold">
                                            {player.winnings}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-gold/20 to-red-900/20 px-6 py-3 text-center text-sm text-gold/70">
                            Обновляется в реальном времени
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gold">
                        Отзывы игроков
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-900 rounded-xl p-6 border border-gold/20 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-gold/10"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-gold/30 mr-4"
                                    />

                                    <h3 className="font-bold text-gold">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                                <div className="mt-4 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gold"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-red-600 to-gold p-1 rounded-xl">
                            <div className="bg-gray-900 px-8 py-4 rounded-lg">
                                <h3 className="text-2xl font-bold text-gold mb-2">
                                    Присоединяйтесь к нашим победителям!
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Более 10,000 игроков уже выиграли с Vegas Royale
                                </p>
                                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                                    Начать выигрывать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gold/20 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gold mb-4">
                                <span className="text-red-600">Vegas</span> Royale
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Лучшее социальное казино для истинных ценителей азарта и роскоши.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gold hover:text-red-600 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gold hover:text-red-600 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gold hover:text-red-600 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Ссылки</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Игры
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Турниры
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        VIP-программа
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Акции
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Поддержка</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Служба поддержки
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Правила
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Политика конфиденциальности
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gold transition-colors">
                                        Условия использования
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Мобильное приложение</h4>
                            <p className="text-gray-400 mb-4">
                                Скачайте наше приложение и играйте где угодно!
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className="block bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors"
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 mr-3"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M17.9 2.318A5.364 5.364 0 0 0 16.455 2a5.986 5.986 0 0 0-2.327.6 6.053 6.053 0 0 0-1.873 1.364 5.86 5.86 0 0 0-1.364 2.182H9.982a5.86 5.86 0 0 0-1.364-2.182A6.053 6.053 0 0 0 6.745 2.6 5.986 5.986 0 0 0 4.418 2c-.491.005-.98.073-1.455.218C1.4 2.909.327 4.1.327 5.727c-.036 1.582.764 3.364 2.4 5.291 1.6 1.891 3.482 3.745 5.645 5.4.51.436 1.055.827 1.636 1.173.182.1.4.1.582 0a11.3 11.3 0 0 0 1.636-1.173c2.164-1.655 4.042-3.509 5.645-5.4 1.636-1.927 2.437-3.709 2.4-5.291.001-1.627-1.071-2.818-2.618-3.509z" />
                                        </svg>
                                        <div>
                                            <div className="text-xs">Скачать в</div>
                                            <div className="text-sm font-bold">App Store</div>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="block bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors"
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 mr-3"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.3.679V1.135c.01.257.119.499.3.679zm10.831 10.831l2.624-2.624 9.582 5.47c.69.395.69 1.386 0 1.782l-9.582 5.47-2.624-2.624 5.8-3.897-5.8-3.577zM5.454 0L16.473 0c.264.001.516.107.7.294l-5.903 5.903L5.746.294C5.931.107 6.182.001 5.454 0zm0 24l11.019-.001c.264-.001.516-.107.7-.294l-5.903-5.903-5.523 5.903c.183.187.435.293.707.295z" />
                                        </svg>
                                        <div>
                                            <div className="text-xs">Скачать в</div>
                                            <div className="text-sm font-bold">Google Play</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gold/10 pt-8 text-center text-gray-500 text-sm">
                        <p>
                            © 2023 Vegas Royale. Все права защищены. Игра предназначена для лиц
                            старше 18 лет.
                        </p>
                        <p className="mt-2">
                            Это социальное казино. Игра не предлагает возможности выиграть реальные
                            деньги или ценные призы.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Custom styles for gold color and animations */}
            <style jsx>{`
                .text-gold {
                    color: #d4af37;
                }
                .bg-gold {
                    background-color: #d4af37;
                }
                .border-gold {
                    border-color: #d4af37;
                }
                .from-gold {
                    --tw-gradient-from: #d4af37;
                }
                .to-gold {
                    --tw-gradient-to: #d4af37;
                }
                .shadow-gold {
                    --tw-shadow-color: #d4af37;
                }
                .hover\:bg-gold:hover {
                    background-color: #d4af37;
                }
                .hover\:text-gold:hover {
                    color: #d4af37;
                }
                .hover\:border-gold:hover {
                    border-color: #d4af37;
                }

                @keyframes neon-glow {
                    0%,
                    100% {
                        text-shadow:
                            0 0 5px rgba(212, 175, 55, 0.7),
                            0 0 10px rgba(212, 175, 55, 0.5),
                            0 0 15px rgba(212, 175, 55, 0.3);
                    }
                    50% {
                        text-shadow:
                            0 0 10px rgba(212, 175, 55, 0.9),
                            0 0 20px rgba(212, 175, 55, 0.7),
                            0 0 30px rgba(212, 175, 55, 0.5);
                    }
                }

                .animate-neon {
                    animation: neon-glow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
